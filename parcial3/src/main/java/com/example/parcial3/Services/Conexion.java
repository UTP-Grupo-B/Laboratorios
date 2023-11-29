package com.example.parcial3.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDB() {
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            String user = "";
            String contraseña = "";
            return DriverManager.getConnection("jdbc:mariadb://", user, contraseña);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error en la conexión a la base de datos");
        } catch (ClassNotFoundException cnfex) {
            cnfex.printStackTrace();
            System.out.println("Error de clase no encontrada");
        }
        return null; 
            
    }   
}
