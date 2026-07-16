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
                                    "Elongate frame & emphasize legs",
                                    "A-line & empire dresses",
                                    "Choose flowy fabric"
                            )
                    )
            ),
            Map.entry("Hourglass",
                    createSilhouette(
                            List.of(
                                    "Highlight & emphasize waist",
                                    "Wrap & fit-and-flare dresses",
                                    "Choose flowy, soft fabric"
                            )
                    )
            ),
            Map.entry("Inverted Triangle",
                    createSilhouette(
                            List.of(
                                    "Soften upper body, add curves",
                                    "Sleek tops, A-line silhouettes",
                                    "Wear statement pieces on lower half"
                            )
                    )
            ),
            Map.entry("Pear",
                    createSilhouette(
                            List.of(
                                    "Draw eyes up & emphasize waist",
                                    "A-line silhouettes & wrap dresses",
                                    "Add volume to shoulders"
                            )
                    )
            ),
            Map.entry("Rectangle",
                    createSilhouette(
                            List.of(
                                    "Create curves & define waistline",
                                    "Fit-and-flare cuts with cinched layers",
                                    "Always tuck shirts, no boxy clothes"
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
                                    "Open necklines (V, square, scoop)",
                                    "Mid or low-rise pants",
                                    "Drop waist dress & low-slung belts"
                            )
                    )
            ),
            Map.entry("Balanced Torso / Legs",
                    createProportions(
                            List.of(
                                    "Mid-rise pants & skirts",
                                    "Layer items that fall around the hips",
                                    "Relaxed, half-tucked shirts"
                            )
                    )
            ),
            Map.entry("Long Torso / Short Legs",
                    createProportions(
                            List.of(
                                    "Long, high-waisted pants",
                                    "Cropped jackets",
                                    "Tuck in shirt to emphasize waist"
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
