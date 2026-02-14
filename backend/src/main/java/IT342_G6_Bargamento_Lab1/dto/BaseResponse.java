package IT342_G6_Bargamento_Lab1.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BaseResponse {
    private boolean success;
    private String message;
    private Object data;
}