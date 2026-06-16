package com.sophiearchibald.sophies_styler_api.data;

import com.sophiearchibald.sophies_styler_api.model.HairDetails;
import com.sophiearchibald.sophies_styler_api.model.SilhouetteDetails;

import java.util.List;
import java.util.Map;

public class HairInformation {

    public static final Map<String, HairDetails> faceShapes = Map.ofEntries(
            Map.entry("Diamond",
                    createFaceShape(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Heart",
                    createFaceShape(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Long",
                    createFaceShape(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Oval",
                    createFaceShape(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Round",
                    createFaceShape(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            ),
            Map.entry("Square",
                    createFaceShape(
                            List.of(
                                    "Suggestion 1",
                                    "Suggestion 2",
                                    "Suggestion 3"
                            )
                    )
            )
    );

    private static HairDetails createFaceShape(

            List<String> suggestions

    ) {
        HairDetails details = new HairDetails();

        details.suggestions = suggestions;

        return details;
    }
}
