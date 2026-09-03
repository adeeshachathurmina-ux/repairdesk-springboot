package lk.repairdesk.api.domain;
import jakarta.persistence.*; import lombok.*; import com.fasterxml.jackson.annotation.JsonIgnore; import java.time.Instant;
@Entity @Table(name="users") @Getter @Setter @NoArgsConstructor
public class User { @Id @GeneratedValue(strategy=GenerationType.IDENTITY) private Long id; @Column(nullable=false,length=100) private String name; @Column(nullable=false,unique=true,length=150) private String email; @JsonIgnore @Column(nullable=false) private String password; @Enumerated(EnumType.STRING) @Column(nullable=false,length=30) private Role role; @Column(nullable=false) private boolean enabled=true; @Column(nullable=false,updatable=false) private Instant createdAt=Instant.now(); }
