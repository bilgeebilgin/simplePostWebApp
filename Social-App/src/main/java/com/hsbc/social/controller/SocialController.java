package com.hsbc.social.controller;

import com.hsbc.social.domain.Message;
import com.hsbc.social.domain.User;
import com.hsbc.social.service.StorageService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "/social-api")
@CrossOrigin(origins = "*")
public class SocialController {

    private final StorageService storage;

    public SocialController(StorageService storage) {
        this.storage = storage;
    }

    @PostMapping(path = "/message")
    public void postMessage(@Valid @RequestBody Message message) {
        storage.saveMessage(message);
    }

    @GetMapping(path = "/message/{userName}")
    public List<Message> showWall(@PathVariable String userName) {
        return storage
                .listMessages(userName);
    }

    @GetMapping(path = "/user/{userName}/{following}")
    public List<User> followUser(@PathVariable String userName, @PathVariable String following){
        return storage.followUser(userName, following);
    }

    @GetMapping(path = "/timeline/{userName}")
    public List<Message> showTimeline(@PathVariable String userName) {
        return storage
                .showAllMessages(userName);
    }
    @GetMapping(path = "/all-user")
    public List<User> getAllUsers() {
        return storage.getAllUser();
    }


}
