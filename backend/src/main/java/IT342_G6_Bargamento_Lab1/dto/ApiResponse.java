package IT342_G6_Bargamento_Lab1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiResponse {
    private boolean success;
    private String message;
    private Object data; // Can hold user info, tokens, or be null
}