package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.data.SeasonInformation;
import com.sophiearchibald.sophies_styler_api.data.SeasonProfiles;
import com.sophiearchibald.sophies_styler_api.dto.ColorSubmission;
import com.sophiearchibald.sophies_styler_api.model.ColorResult;
import com.sophiearchibald.sophies_styler_api.model.SeasonDetails;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ColorService {

public SeasonDetails calculateSeason(ColorSubmission traits) {

    Map<String, Double> scores = new HashMap<>();

    for (String season : SeasonProfiles.profiles.keySet()) {

        double total = 0;

        Map<String, Double> profile = SeasonProfiles.profiles.get(season);

        for (String trait : profile.keySet()) {
            double userInput = getTraitValue(traits, trait);

            double weight = profile.get(trait);

            total += userInput * weight;
        }

        scores.put(season, total);

    }

    String bestSeason = "";
    double highestScore = 0;

    for (String season : scores.keySet()) {
        double score = scores.get(season);

        if (score > highestScore) {
            highestScore = score;
            bestSeason = season;
        }
    }

    ColorResult result = new ColorResult();

    result.seasonDetails = SeasonInformation.seasons.get(bestSeason);
//    result.season = bestSeason;

    return SeasonInformation.seasons.get(bestSeason);

}

    private double getTraitValue(
            ColorSubmission traits,
            String trait
    ) {

        return switch (trait) {

            case "warm" -> traits.warm;
            case "cool" -> traits.cool;

            case "bright" -> traits.bright;
            case "muted" -> traits.muted;

            case "dark" -> traits.dark;
            case "light" -> traits.light;

            case "highContrast" -> traits.highContrast;
            case "lowContrast" -> traits.lowContrast;

            default -> 0;
        };
    }

    public SeasonDetails getSeason(String seasonName) {
        return SeasonInformation.seasons.get(seasonName);
    }

}