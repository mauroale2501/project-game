package org.project.servergame.Controller;

import org.project.servergame.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Controller {

    GameService service;

    public Controller(GameService service ) {
        this.service = service;
    }

    @GetMapping("/hints")
    public ResponseEntity<String> getPublicMessage() {
        return ResponseEntity.ok("Here we are");
    }


}
