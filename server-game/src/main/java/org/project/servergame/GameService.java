package org.project.servergame;

import org.springframework.stereotype.Service;

@Service
public class GameService {

    GameRepository repo;

    public GameService (GameRepository repo) {
        this.repo = repo;
    }
}
