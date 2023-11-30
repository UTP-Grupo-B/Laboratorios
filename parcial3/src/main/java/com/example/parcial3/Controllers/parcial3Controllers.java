package com.example.parcial3.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.parcial3.Models.Usuarios;
import com.example.parcial3.Services.parcial3DB;

@RestController
public class parcial3Controllers {

    @PostMapping("/parcial3")
    public ResponseEntity<String> registrarUsuario(@RequestBody Usuarios usuario) {
        try {
            String result = new parcial3DB().register(usuario);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al procesar la solicitud");
        }
    }
}
