<html>
    <head>
    <title>my sql Sample</title>
    <style>
    body{
      background-image: url(last.jpeg);
      background-repeat: no-repeat;
      background-position:center;
background-attachment: fixed;
background-size: 100% 100%;
font-size: 25px;



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
    PreparedStatement Stmt=con.prepareStatement("SELECT * from student.details");

    Stmt.executeQuery();
    ResultSet rs=Stmt.getResultSet();

    String firstname= null;
String middlename=null;
String lastname=null;
String phonenumber= null;
String gender=null;
String X_marks=null;
String XII_marks=null;
String currentaddress=null;

String course= null;

	%>
<center>  <text style="background-color:red" >Registered Candidates</text> </center>
<center><table border='3'style="background-color:white"></center>
<th>firstname</th>
<th>middlename</th>
<th>lastname</th>
<th>course</th>
<th>gender</th>
<th>10th marks</th>
<th>12th marks</th>
<th>Phone number</th>
<th>Current Address</th>

<%
while(rs.next())
    {
firstname=rs.getString(1);
middlename=rs.getString(2);
lastname=rs.getString(3);
course=rs.getString(4);
gender=rs.getString(5);
X_marks=rs.getString(6);
XII_marks=rs.getString(7);

phonenumber=rs.getString(8);
currentaddress=rs.getString(9);

%>
<br>

<tr>

<td><%=firstname %></td>
<td><%=middlename %></td>
<td><%=lastname %></td>
<td><%=course %></td>
<td><%=gender %></td>
<td><%=X_marks %></td>
<td><%=XII_marks %></td>
<td><%=phonenumber %></td>
<td><%=currentaddress %></td>

</tr>


  <%  }
    rs.close();Stmt.close();con.close();

    %>
</table>

    </body>
    </html>
