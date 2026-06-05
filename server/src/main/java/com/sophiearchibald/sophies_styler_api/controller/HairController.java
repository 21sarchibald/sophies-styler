package com.sophiearchibald.sophies_styler_api.controller;

import com.sophiearchibald.sophies_styler_api.dto.HairSubmission;
import com.sophiearchibald.sophies_styler_api.model.HairResult;
import com.sophiearchibald.sophies_styler_api.service.HairService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hair")
public class HairController {
    private final HairService hairService;

    public HairController(HairService hairService) {
        this.hairService = hairService;
    }

    @PostMapping("/analyze")
    public HairResult analyzeHair(@RequestBody HairSubmission hair) {
        return hairService.calculateHair(hair);
}

}