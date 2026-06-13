package com.sophiearchibald.sophies_styler_api.controller;

import com.sophiearchibald.sophies_styler_api.dto.ColorSubmission;
import com.sophiearchibald.sophies_styler_api.model.ColorResult;
import com.sophiearchibald.sophies_styler_api.model.SeasonDetails;
import com.sophiearchibald.sophies_styler_api.service.ColorService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/colors")

public class ColorController {

    private final ColorService colorService;

    public ColorController(ColorService colorService) {
        this.colorService = colorService;
    }

    @PostMapping("/analyze")
    public SeasonDetails analyzeColors(@RequestBody ColorSubmission traits) {
        System.out.print(traits);
        System.out.println("it worked");

        return colorService.calculateSeason(traits);
    }

    @PostMapping("/getPalette")
    public SeasonDetails getSeason(@RequestBody String seasonName) {
        return colorService.getSeason(seasonName);
    }
}
