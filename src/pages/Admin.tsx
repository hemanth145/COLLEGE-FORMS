import { useEffect, useMemo, useState } from 'react'
import { supabase, type PublicRegistration } from '../lib/supabase'
import '../styles/admin.css'

export default function Admin() {
  const [rows, setRows] = useState<PublicRegistration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [courseFilter, setCourseFilter] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      const { data, error: fetchError } = await supabase
        .from('public_registrations')
        .select('*')
        .order('created_at', { ascending: false })

      if (cancelled) return

      if (fetchError) {
        setError(fetchError.message)
      } else {
        setRows(data ?? [])
      }
      setLoading(false)
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const courses = useMemo(() => Array.from(new Set(rows.map((r) => r.course))).sort(), [rows])

  const filtered = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearch = `${row.first_name} ${row.last_name}`.toLowerCase().includes(search.toLowerCase())
      const matchesCourse = courseFilter ? row.course === courseFilter : true
      return matchesSearch && matchesCourse
    })
  }, [rows, search, courseFilter])

  return (
    <section className="section">
      <div className="container">
        <p className="section-eyebrow">Admin</p>
        <h1 className="section-title">Submitted registrations</h1>
        <p className="admin-note">
          Showing name, course, and marks only — phone numbers and addresses are never exposed here,
          even to visitors of this page.
        </p>

        <div className="admin-controls">
          <input
            type="text"
            placeholder="Search by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)}>
            <option value="">All courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {loading && <p className="admin-status">Loading…</p>}
        {error && <p className="admin-status admin-error">{error}</p>}

        {!loading && !error && (
          <div className="card admin-table-card">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Gender</th>
                  <th>10th</th>
                  <th>12th</th>
                  <th>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={row.id}>
                    <td>{row.first_name} {row.last_name}</td>
                    <td><span className="pill">{row.course}</span></td>
                    <td>{row.gender}</td>
                    <td>{row.tenth_marks}</td>
                    <td>{row.twelfth_marks}</td>
                    <td>{new Date(row.created_at).toLocaleString()}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="admin-empty">No registrations match yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
