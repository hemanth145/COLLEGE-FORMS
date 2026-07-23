import { useState, type FormEvent } from 'react'
import { supabase, type RegistrationInput } from '../lib/supabase'
import DemoNotice from '../components/DemoNotice'
import '../styles/register.css'

const emptyForm: RegistrationInput = {
  first_name: '',
  middle_name: '',
  last_name: '',
  course: '',
  gender: 'Male',
  tenth_marks: '',
  twelfth_marks: '',
  phone: '',
  address: '',
}

export default function Register() {
  const [form, setForm] = useState<RegistrationInput>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState<RegistrationInput | null>(null)

  const update = (field: keyof RegistrationInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    const { error: insertError } = await supabase.from('registrations').insert(form)

    if (insertError) {
      setStatus('error')
      setError(insertError.message)
      return
    }

    setSubmitted(form)
    setForm(emptyForm)
    setStatus('idle')
  }

  if (submitted) {
    return (
      <section className="section">
        <div className="container register-confirm">
          <p className="section-eyebrow">Application received</p>
          <h1 className="section-title">Thanks, {submitted.first_name}!</h1>
          <p className="register-confirm-lead">
            Here's exactly what we saved — check it over, and reach out if anything needs correcting.
          </p>

          <div className="card confirm-card">
            <dl>
              <div><dt>Name</dt><dd>{[submitted.first_name, submitted.middle_name, submitted.last_name].filter(Boolean).join(' ')}</dd></div>
              <div><dt>Course</dt><dd>{submitted.course}</dd></div>
              <div><dt>Gender</dt><dd>{submitted.gender}</dd></div>
              <div><dt>10th marks</dt><dd>{submitted.tenth_marks}</dd></div>
              <div><dt>12th marks</dt><dd>{submitted.twelfth_marks}</dd></div>
              <div><dt>Phone</dt><dd>{submitted.phone}</dd></div>
              <div><dt>Address</dt><dd>{submitted.address}</dd></div>
            </dl>
          </div>

          <button className="btn" onClick={() => setSubmitted(null)}>
            Submit another application
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container register-container">
        <p className="section-eyebrow">Admissions</p>
        <h1 className="section-title">Student registration</h1>

        <DemoNotice />

        <form className="card register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" placeholder="First name" required value={form.first_name} onChange={update('first_name')} />
            <input type="text" placeholder="Middle name" value={form.middle_name} onChange={update('middle_name')} />
            <input type="text" placeholder="Last name" required value={form.last_name} onChange={update('last_name')} />
          </div>

          <div className="form-row">
            <select required value={form.course} onChange={update('course')}>
              <option value="">Course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="M.Tech">M.Tech</option>
            </select>

            <select required value={form.gender} onChange={update('gender')}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <input type="text" placeholder="10th marks (%)" required value={form.tenth_marks} onChange={update('tenth_marks')} />
            <input type="text" placeholder="12th marks (%)" required value={form.twelfth_marks} onChange={update('twelfth_marks')} />
            <input type="tel" placeholder="Phone number" required value={form.phone} onChange={update('phone')} />
          </div>

          <textarea placeholder="Current address" rows={4} required value={form.address} onChange={update('address')} />

          {status === 'error' && <p className="register-error">{error}</p>}

          <button className="btn" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting…' : 'Register'}
          </button>
        </form>
      </div>
    </section>
  )
}
