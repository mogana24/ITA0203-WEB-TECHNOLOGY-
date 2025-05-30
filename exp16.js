 import java.io.*;
 import javax.servlet.*;
 import javax.servlet.http.*;
 public class EmployeeServlet extends HttpServlet {
  public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException,
 ServletException {
    res.setContentType("text/html");
    PrintWriter out = res.getWriter();
    String name = req.getParameter("name");
    String dept = req.getParameter("department");
    out.println("<h1>Employee Details</h1>");
    out.println("<p>Name: " + name + "</p>");
    out.println("<p>Department: " + dept + "</p>");
  }
 }