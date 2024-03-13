package org.project.servergame.tables;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "current_games")
public class CurrentGame {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="level_id")
    private int levelId;

    @Column(name="session_id")
    private String sessionId;

    @Column(name="start_date")
    private LocalDateTime startDate;

    @Column(name="end_date" , nullable = true)
    private LocalDateTime endDate;

    public CurrentGame(int levelId, String sessionId, LocalDateTime startDate, Object o) {
        this.levelId=levelId;
        this.sessionId=sessionId;
        this.startDate = startDate;
    }

    public CurrentGame(int id,int levelId, String sessionId, LocalDateTime startDate, LocalDateTime endDate) {
        this.levelId = levelId;
        this.sessionId = sessionId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.id = id;
    }

    public CurrentGame(){
    }

    public int getId() {
        return id;
    }

    public int getLevelId() {
        return levelId;
    }

    public void setLevelId(int levelId) {
        this.levelId = levelId;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }
}
