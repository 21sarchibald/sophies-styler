package com.sophiearchibald.sophies_styler_api.data;

import com.sophiearchibald.sophies_styler_api.model.ProportionsDetails;
import com.sophiearchibald.sophies_styler_api.model.SilhouetteDetails;

import java.util.List;
import java.util.Map;

public class SilhouetteInformation {

    public static final Map<String, SilhouetteDetails> silhouettes = Map.ofEntries(

            Map.entry("Apple",
                    createSilhouette(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Hourglass",
                    createSilhouette(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Inverted Triangle",
                    createSilhouette(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Pear",
                    createSilhouette(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Rectangle",
                    createSilhouette(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            )

    );

    private static SilhouetteDetails createSilhouette(

            List<String> suggestions

    ) {
        SilhouetteDetails details = new SilhouetteDetails();

        details.suggestions = suggestions;

        return details;
    }

    public static final Map<String, ProportionsDetails> proportions = Map.ofEntries(

            Map.entry("Short Torso / Long Legs",
                    createProportions(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Balanced Torso / Legs",
                    createProportions(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Long Torso / Short Legs",
                    createProportions(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            )

    );

    private static ProportionsDetails createProportions(

            List<String> suggestions

    ) {
        ProportionsDetails details = new ProportionsDetails();

        details.suggestions = suggestions;

        return details;
    }


}
