package com.example.parcial3.Services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.example.parcial3.Models.Usuarios;

public class parcial3DB {
    Connection cnn;

    public parcial3DB() {
        cnn = new Conexion().openDB();
    }

    public String register(Usuarios usuario) {
        String feedback = "";

        String query = "CALL InsertarUsuario(?, ?, ?)";

        try (PreparedStatement pstmt = cnn.prepareStatement(query)) {
            pstmt.setString(1, usuario.getUsername());
            pstmt.setString(2, usuario.getEmail());
            pstmt.setString(3, usuario.getTelefono());

            pstmt.executeUpdate();

            return "Registro Exitoso";
        } catch (SQLException sqle) {
            sqle.printStackTrace();
            feedback = "Error al registrar: " + sqle.getMessage();
        } finally {
            try {
                if (cnn != null) {
                    cnn.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return feedback;
    }
}
