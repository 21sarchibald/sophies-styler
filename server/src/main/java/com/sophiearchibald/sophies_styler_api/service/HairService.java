package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.dto.HairSubmission;
import com.sophiearchibald.sophies_styler_api.model.HairResult;
import org.springframework.stereotype.Service;

@Service
public class HairService {

    public HairResult calculateHair(HairSubmission hair) {
        HairResult result = new HairResult();
        return result;
    }

}
