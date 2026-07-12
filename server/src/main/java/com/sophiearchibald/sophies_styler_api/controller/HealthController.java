package com.sophiearchibald.sophies_styler_api.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HealthController {

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

}
