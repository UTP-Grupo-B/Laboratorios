package com.example.parcial3.Models;

public class Usuarios {
    private String username; 
    private String email;  
    private String telefono;

    public Usuarios(String username, String email, String telefono) {
        this.username = username;
        this.email = email;
        this.telefono = telefono;
    }
    
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    } 
}
