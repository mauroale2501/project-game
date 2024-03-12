//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//
//import java.util.UUID;
//
//
//public class Timer {
//    @Id
//    @GeneratedValue(strategy = GenerationType.UUID)
//    private UUID id;
//
//    public UUID getId() {
//        return id;
//    }
//
//    public void setId(UUID id) {
//        this.id = id;
//    }
//
//    public Long getStartTime() {
//        return startTime;
//    }
//
//    public void setStartTime(Long startTime) {
//        this.startTime = startTime;
//    }
//
//    public Long getTimeLeft() {
//        return timeLeft;
//    }
//
//    public void setTimeLeft(Long timeLeft) {
//        this.timeLeft = timeLeft;
//    }
//
//    private Long startTime;
//    private Long timeLeft;
//
//
//}