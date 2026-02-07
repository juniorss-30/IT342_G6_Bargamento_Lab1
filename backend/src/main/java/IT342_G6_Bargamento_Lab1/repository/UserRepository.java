package IT342_G6_Bargamento_Lab1.repository;

import IT342_G6_Bargamento_Lab1.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}