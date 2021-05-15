<html>
    <head>
    <title>my sql Sample</title>
    <style media="screen">
      body{
        background-image: url(last.jpeg);
        background-repeat: no-repeat;
        background-position:center;
  background-attachment: fixed;
  background-size: 100% 100%;


      }
      #button
      {
        font-size: 25px;
        background-color: green;
        padding: 10px;
        margin-top: 25%;
        margin-left: 45%;
        font-family: monospace;

      }

      #button:hover
      {
        font-size: 28px;

      }
    </style>

    </head>
    <body>

    <%@page import="java.sql.*" %>

       <%
	System.out.println("injsp");
	Class.forName("com.mysql.jdbc.Driver");

     Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306","root","");
//Class.forName("oracle.jdbc.driver.OracleDriver");
//Connection con=DriverManager.getConnection("jdbc:oracle:thin:@192.168.23.144:1521:orcl","userid","pwd");
System.out.println("connection established");

		String t1=request.getParameter("firstname");
		String t2 = request.getParameter("middlename");
		String  t3 =request.getParameter("lastname");
		String t4=request.getParameter("course");
		String t5 = request.getParameter("gender");
		String  t6 =request.getParameter("10thmarks");
		String t7 = request.getParameter("12thmarks");

		String t8 = request.getParameter("phone");
		String  t9 =request.getParameter("address");





//System.out.println("be fore insert"+t1);
//System.out.println("be fore insert"+t2);
//System.out.println("be fore insert"+t3);
			String query ="insert into student.details values (?,?,?,?,?,?,?,?,?)";
			PreparedStatement ps=con.prepareStatement(query);

			ps.setString(1, t1);
			System.out.println("name entered");
			ps.setString(2, t2);
				System.out.println("name entered");
			ps.setString(3, t3);
			ps.setString(4, t4);
			System.out.println("name entered");
			ps.setString(5, t5);
				System.out.println("name entered");
			ps.setString(6, t6);
			ps.setString(7, t7);
			System.out.println("name entered");

			ps.setString(8, t8);
				System.out.println("name entered");
			ps.setString(9, t9);
				System.out.println("name entered");


				int nub=ps.executeUpdate();
//con.commit();
			System.out.println("updated");%>
      <a href="index.html"><button type="button" id="button" onclick="click()" value="1"> Home page </button> </a>
  <script>
    function click()
     {
       var a=document.getElementById('button').value;
       if (a=1)
        {
         window.location.href="index.html"+window.location.href;

       }
         }
window.alert("Data Successfully Sumbitted");
  </script>
<%
			ps.close();
		//st.close();


   con.close();


    %>


    </body>
    </html>
