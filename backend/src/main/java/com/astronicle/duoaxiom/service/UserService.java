package com.astronicle.duoaxiom.service;

import com.astronicle.duoaxiom.model.User;
import com.astronicle.duoaxiom.repository.UserRepository;
import org.springframework.stereotype.Service;
import at.favre.lib.crypto.bcrypt.BCrypt;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    // using constr injection instead of autowiring
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {

        //what im doing here is getting the password field, hashing it and then setting it to null
        if (user.getPassword() != null) {
            String hashed = BCrypt.withDefaults().hashToString(12, user.getPassword().toCharArray());
            user.setPasswordHash(hashed);
            user.setPassword(null); // clearing raw password for safety
        }

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
