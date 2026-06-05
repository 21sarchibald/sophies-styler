package com.sophiearchibald.sophies_styler_api.controller;

import com.sophiearchibald.sophies_styler_api.dto.SilhouetteSubmission;
import com.sophiearchibald.sophies_styler_api.model.SilhouetteResult;
import com.sophiearchibald.sophies_styler_api.service.SilhouetteService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/silhouette")
public class SilhouetteController {
    private final SilhouetteService silhouetteService;

    public SilhouetteController(SilhouetteService silhouetteService) {
        this.silhouetteService = silhouetteService;
    }

    @PostMapping("/analyze")
    public SilhouetteResult analyzeSilhouette(@RequestBody SilhouetteSubmission silhouette) {
        return silhouetteService.calculateSilhouette(silhouette);
    }

}