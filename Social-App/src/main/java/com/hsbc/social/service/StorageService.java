package com.hsbc.social.service;

import com.hsbc.social.domain.Message;
import com.hsbc.social.domain.User;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static java.util.Collections.emptyList;

@Component
public class StorageService {

    private Map<String, List<Message>> messageMap = new ConcurrentHashMap<>();
    private Map<String, User> userMap = new ConcurrentHashMap<>();

    public void saveMessage(Message message) {
        String userName = message.getUserName();
        messageMap.putIfAbsent(userName, new ArrayList<>());
        messageMap.get(userName).add(message);

        userMap.putIfAbsent(userName, new User(userName));

    }

    public List<Message> listMessages(String userName) {
        return messageMap.getOrDefault(userName, emptyList())
                .stream()
                .sorted((m1, m2) -> m2.getDateTime().compareTo(m1.getDateTime()))
                .collect(Collectors.toList());
    }

    public List<User> followUser(String userName, String following) {
        User user = userMap.get(userName);
        User followedUser = userMap.get(following);

        Objects.requireNonNull(user, userName + " not found");
        Objects.requireNonNull(followedUser, following + " not found");

        List<User> followings = user.getFollowings();
        if (!followings.contains(followedUser)) {
            followings.add(followedUser);
        }

        return followings;
    }

    public List<Message> showAllMessages(String userName) {
        User user = userMap.get(userName);

        Objects.requireNonNull(user, userName + " not found");

        return user.getFollowings()
                .stream()
                .flatMap(u -> {
                    Stream<Message> stream = messageMap.getOrDefault(u.getUserName(), emptyList()).stream();
                    return stream;
                })
                .sorted((m1, m2) -> m2.getDateTime().compareTo(m1.getDateTime()))
                .collect(Collectors.toList());

    }
    public List<User> getAllUser() {
        return new ArrayList(userMap.values());
    }
}
