package IT342_G6_Bargamento_Lab1.controller;

import IT342_G6_Bargamento_Lab1.entity.UserEntity;
import IT342_G6_Bargamento_Lab1.repository.UserRepository;
import IT342_G6_Bargamento_Lab1.dto.BaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // Inject password encoder

    @PostMapping("/register")
    public ResponseEntity<BaseResponse> register(@RequestBody UserEntity user) {
        // Check if username exists
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new BaseResponse(false, "Username already exists", null));
        }

        // Hash the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new BaseResponse(true, "User created successfully!", null));
    }

    @PostMapping("/login")
    public ResponseEntity<BaseResponse> login(@RequestBody UserEntity loginRequest) {
        return userRepository.findByUsername(loginRequest.getUsername())
                .filter(user -> passwordEncoder.matches(loginRequest.getPassword(), user.getPassword()))
                .map(user -> ResponseEntity.ok(new BaseResponse(true, "Login successful", user.getUsername())))
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new BaseResponse(false, "Invalid username or password", null)));
    }

    @PostMapping("/logout")
    public ResponseEntity<BaseResponse> logout() {
        return ResponseEntity.ok(new BaseResponse(true, "Logged out successfully", null));
    }
}
