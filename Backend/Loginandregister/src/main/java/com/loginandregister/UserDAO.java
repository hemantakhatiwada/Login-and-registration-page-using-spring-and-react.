package com.loginandregister;
import org.springframework.stereotype.Repository;
import java.sql.*;

@Repository
public class UserDAO {
    private final String url = "jdbc:mysql://localhost:3306/reactdb";
    private final String username = "root";
    private final String password = "password";


    public Connection getConnection() throws Exception {
        return DriverManager.getConnection(url, username, password);
    }

    public void save(Usermodel user) throws Exception
    {
        Connection con = getConnection();
        PreparedStatement ps = con.prepareStatement("INSERT INTO users(username,email,password) VALUES (?,?,?)");

        ps.setString(1, user.getUsername());
        ps.setString(2, user.getEmail());
        ps.setString(3, user.getPassword());

        ps.executeUpdate();
        con.close();
    }

    public Usermodel findByEmail(String email) throws Exception {

        Connection con = getConnection();
        PreparedStatement ps =
                con.prepareStatement("SELECT * FROM users WHERE email=?");

        ps.setString(1, email);

        ResultSet rs = ps.executeQuery();

        Usermodel user = null;

        if(rs.next()){
            user = new Usermodel();
            user.setId(rs.getInt("id"));
            user.setUsername(rs.getString("username"));
            user.setEmail(rs.getString("email"));
            user.setPassword(rs.getString("password"));
        }

        con.close();
        return user;
    }
}
