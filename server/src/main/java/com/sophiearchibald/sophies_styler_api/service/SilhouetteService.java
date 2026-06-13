package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.dto.SilhouetteSubmission;
import com.sophiearchibald.sophies_styler_api.model.SilhouetteResult;
import org.springframework.stereotype.Service;

@Service
public class SilhouetteService {

    public SilhouetteResult calculateSilhouette(SilhouetteSubmission silhouetteSubmission) {
        SilhouetteResult result = new SilhouetteResult();
        result.silhouette = silhouetteSubmission.silhouette;
        result.proportions = silhouetteSubmission.proportions;
        return result;
    }

}