package com.sophiearchibald.sophies_styler_api.data;

import com.sophiearchibald.sophies_styler_api.model.HairDetails;

import java.util.List;
import java.util.Map;

public class HairInformation {

    public static final Map<String, HairDetails> faceShapes = Map.ofEntries(
            Map.entry("Diamond",
                    createFaceShape(
                            List.of(
                                    "Textured Lobs",
                                    "Long Layers",
                                    "Curtain/Side-Swept Bangs"
                            )
                    )
            ),
            Map.entry("Heart",
                    createFaceShape(
                            List.of(
                                    "Long Layers",
                                    "Curtain/Side-Swept Bangs",
                                    "Long Bob"

                            )
                    )
            ),
            Map.entry("Long",
                    createFaceShape(
                            List.of(
                                    "Volume at Side of Face",
                                    "Bangs",
                                    "Avoid Flat/Sleek Styles"
                            )
                    )
            ),
            Map.entry("Oval",
                    createFaceShape(
                            List.of(
                                    "Most Styles Work",
                                    "Add Texture/Volume",
                                    "Avoid Hiding the Face"
                            )
                    )
            ),
            Map.entry("Round",
                    createFaceShape(
                            List.of(
                                    "Volume at Crown",
                                    "Long Bob",
                                    "Long Layers"
                            )
                    )
            ),
            Map.entry("Square",
                    createFaceShape(
                            List.of(
                                    "Layered Cut",
                                    "Height on Top/Narrow Sides",
                                    "Chin-Length Bob"
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
