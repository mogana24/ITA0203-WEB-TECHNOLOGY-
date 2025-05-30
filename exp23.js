 import java.io.*;
 import javax.servlet.*;
 import javax.servlet.http.*;
 public class DishServlet extends HttpServlet {
  public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException,
 ServletException {
    res.setContentType("text/html");
    PrintWriter out = res.getWriter();
    String[] dishes = req.getParameterValues("dish");
    out.println("<h2>Selected Dishes:</h2>");
    for (String dish : dishes) {
      out.println("<p>" + dish + "</p>");
    }
  }
 }