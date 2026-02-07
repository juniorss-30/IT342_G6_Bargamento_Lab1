package IT342_G6_Bargamento_Lab1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable() // Required for testing APIs via Postman/React
                .authorizeHttpRequests()
                .requestMatchers("/api/auth/**").permitAll() // Allows Register/Login
                .anyRequest().authenticated()
                .and().httpBasic();
        return http.build();
    }
}