package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.dto.HairSubmission;
import com.sophiearchibald.sophies_styler_api.model.HairResult;
import org.springframework.stereotype.Service;

@Service
public class HairService {

    public HairResult calculateHair(HairSubmission hairSubmission) {
        HairResult result = new HairResult();
        result.faceShape = hairSubmission.faceShape;
        result.hairColor = hairSubmission.hairColor;
        result.hairTexture = hairSubmission.hairTexture;
        return result;
    }

}
