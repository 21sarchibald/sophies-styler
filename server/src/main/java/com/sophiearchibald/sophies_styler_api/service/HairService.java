package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.data.HairInformation;
import com.sophiearchibald.sophies_styler_api.dto.HairSubmission;
import com.sophiearchibald.sophies_styler_api.model.HairDetails;
import com.sophiearchibald.sophies_styler_api.model.HairResult;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HairService {

    public List<String> getFaceShapeSuggestions(String faceShape) {
        HairDetails details = HairInformation.faceShapes.get(faceShape);
        return details.suggestions;
    }

    public HairResult calculateHair(HairSubmission hairSubmission) {
        HairResult result = new HairResult();
        result.faceShape = hairSubmission.faceShape;
        result.faceShapeCode = hairSubmission.faceShapeCode;
        result.faceShapeSuggestions = getFaceShapeSuggestions(hairSubmission.faceShape);
        result.hairColor = hairSubmission.hairColor;
        result.hairColorCode = hairSubmission.hairColorCode;
        result.hairTexture = hairSubmission.hairTexture;
        result.hairTextureCode = hairSubmission.hairTextureCode;
        return result;
    }

}
