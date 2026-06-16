package com.sophiearchibald.sophies_styler_api.service;

import com.sophiearchibald.sophies_styler_api.data.SilhouetteInformation;
import com.sophiearchibald.sophies_styler_api.dto.SilhouetteSubmission;
import com.sophiearchibald.sophies_styler_api.model.ProportionsDetails;
import com.sophiearchibald.sophies_styler_api.model.SilhouetteDetails;
import com.sophiearchibald.sophies_styler_api.model.SilhouetteResult;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SilhouetteService {

    public List<String> getSilhouetteSuggestions(String silhouette) {
        SilhouetteDetails details = SilhouetteInformation.silhouettes.get(silhouette);
        return details.suggestions;
    }

    public List<String> getProportionsSuggestions(String proportions) {
        ProportionsDetails details = SilhouetteInformation.proportions.get(proportions);
        return details.suggestions;
    }

    public SilhouetteResult calculateSilhouette(SilhouetteSubmission silhouetteSubmission) {
        SilhouetteResult result = new SilhouetteResult();
        result.silhouette = silhouetteSubmission.silhouette;
        result.silhouetteSuggestions = getSilhouetteSuggestions(silhouetteSubmission.silhouette);
        result.proportions = silhouetteSubmission.proportions;
        result.proportionsSuggestions = getProportionsSuggestions(silhouetteSubmission.proportions);
        return result;
    }

}