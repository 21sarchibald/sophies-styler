package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.data.SeasonProfiles;
import com.sophiearchibald.sophies_styler_api.dto.TraitSubmission;
import com.sophiearchibald.sophies_styler_api.model.QuizResult;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class QuizService {

public QuizResult calculateSeason(TraitSubmission traits) {

    Map<String, Double> scores = new HashMap<>();

    for (String season : SeasonProfiles.profiles.keySet()) {

    }

    QuizResult example = new QuizResult();
    example.season = "practice";

    return example;


}

}