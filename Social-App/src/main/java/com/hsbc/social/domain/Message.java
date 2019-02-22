package com.hsbc.social.domain;

import javax.validation.constraints.Max;
import javax.validation.constraints
        .Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class Message {

    @NotBlank
    private String userName;

    private LocalDateTime dateTime = LocalDateTime.now();

    @Size(max = 140)
    @NotBlank
    private String content;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
