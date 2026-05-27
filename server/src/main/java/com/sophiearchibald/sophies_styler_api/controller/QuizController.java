package com.sophiearchibald.sophies_styler_api.controller;

import com.sophiearchibald.sophies_styler_api.dto.TraitSubmission;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")

public class QuizController {
    @PostMapping("/analyze")
    public String sayHello(@RequestBody TraitSubmission traits) {
        System.out.print(traits);
        System.out.println("it worked");
        // return new Greeting(1, "Hello, Spring Boot!");
        return "hello";
    }
}
