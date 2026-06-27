package com.sophiearchibald.sophies_styler_api.data;
import com.sophiearchibald.sophies_styler_api.model.SeasonDetails;

import java.util.Map;
import java.util.List;


public class SeasonInformation {

    public static final Map<String, SeasonDetails> seasons = Map.ofEntries(

            // WINTER

            Map.entry("True Winter",
                    createSeason(
                            "True Winter",
                            "true_winter",
                            "Winter",
                            "Cool",
                            "Balanced",
                            "Cool, crisp, and high-contrast. Clear jewel tones and icy colors make your features stand out.",
                            List.of("#FFFFFF", "#000000", "#003DA5", "#C8102E", "#0085CA", "#7B3F98", "#00A3A3"),
                            List.of("#FFFFFF", "#C0C0C0", "#708090", "#000000"),
                            "Silver",
                            List.of("#D8C3A5", "#C2A878")
                    )
            ),

            Map.entry("Bright Winter",
                    createSeason(
                            "Bright Winter",
                            "bright_winter",
                            "Winter",
                            "Cool",
                            "Bright",
                            "High-energy and vibrant. Clear, saturated colors with strong contrast are your strongest look.",
                            List.of("#FFFFFF", "#000000", "#FF007F", "#00BFFF", "#00C853", "#7B2CBF", "#FF3D00"),
                            List.of("#FFFFFF", "#D9D9D9", "#555555", "#000000"),
                            "Silver",
                            List.of("#B7A99A", "#C7B299")
                    )
            ),

            Map.entry("Dark Winter",
                    createSeason(
                            "Dark Winter",
                            "dark_winter",
                            "Winter",
                            "Cool",
                            "Deep",
                            "Rich, dramatic, and sophisticated. Deep jewel tones create harmony with your coloring.",
                            List.of("#1B1B1B", "#1F3A93", "#4B0082", "#8B0000", "#006D5B", "#36454F", "#C0C0C0"),
                            List.of("#1B1B1B", "#36454F", "#4A5568", "#C0C0C0"),
                            "Silver",
                            List.of("#F5DEB3", "#E6CBA8")
                    )
            ),

            // SPRING

            Map.entry("True Spring",
                    createSeason(
                            "True Spring",
                            "true_spring",
                            "Spring",
                            "Warm",
                            "Balanced",
                            "Fresh, warm, and lively. Clear sunny colors highlight your natural warmth.",
                            List.of("#FFD700", "#FF7F50", "#00A86B", "#40E0D0", "#FF6F61", "#F4C430", "#FFFACD"),
                            List.of("#FFFACD", "#F5DEB3", "#D2B48C", "#8B7355"),
                            "Gold",
                            List.of("#808080", "#4A4A4A")
                    )
            ),

            Map.entry("Bright Spring",
                    createSeason(
                            "Bright Spring",
                            "bright_spring",
                            "Spring",
                            "Warm",
                            "Bright",
                            "Vibrant and energetic. Bright clear colors bring your features to life.",
                            List.of("#FF4500", "#00CED1", "#FFD700", "#FF1493", "#32CD32", "#87CEFA", "#FFF176"),
                            List.of("#FFF176", "#F5DEB3", "#D2B48C", "#8B7355"),
                            "Gold",
                            List.of("#A9A9A9", "#8B7D6B")
                    )
            ),

            Map.entry("Light Spring",
                    createSeason(
                            "Light Spring",
                            "light_spring",
                            "Spring",
                            "Warm",
                            "Light",
                            "Soft, sunny, and delicate. Light warm colors complement your natural brightness.",
                            List.of("#FFFACD", "#FFDAB9", "#FFB6C1", "#98FB98", "#87CEEB", "#FFF176", "#F5DEB3"),
                            List.of("#FFFACD", "#F5DEB3", "#E6D5B8", "#BFA58A"),
                            "Gold",
                            List.of("#000000", "#4A4A4A")
                    )
            ),

            // SUMMER

            Map.entry("True Summer",
                    createSeason(
                            "True Summer",
                            "true_summer",
                            "Summer",
                            "Cool",
                            "Balanced",
                            "Elegant and refined. Cool, softly muted colors create harmony with your features.",
                            List.of("#B0C4DE", "#708090", "#D8BFD8", "#4682B4", "#6A5ACD", "#C0C0C0", "#F8F8FF"),
                            List.of("#F8F8FF", "#D8D8D8", "#A8B2BD", "#708090"),
                            "Silver",
                            List.of("#FF8C00", "#DAA520")
                    )
            ),

            Map.entry("Light Summer",
                    createSeason(
                            "Light Summer",
                            "light_summer",
                            "Summer",
                            "Cool",
                            "Light",
                            "Light, airy, and graceful. Cool pastels are especially flattering.",
                            List.of("#E6E6FA", "#ADD8E6", "#FFC0CB", "#AFEEEE", "#DDA0DD", "#F0F8FF", "#CFE2F3"),
                            List.of("#F0F8FF", "#E6E6FA", "#D3D3D3", "#A8B2BD"),
                            "Silver",
                            List.of("#000000", "#8B4513")
                    )
            ),

            Map.entry("Soft Summer",
                    createSeason(
                            "Soft Summer",
                            "soft_summer",
                            "Summer",
                            "Cool",
                            "Soft",
                            "Gentle and understated. Muted cool colors blend beautifully with your coloring.",
                            List.of("#A8B2A1", "#7D8F69", "#8E9AAF", "#C9A0B6", "#B7B7A4", "#708090", "#D8D3CD"),
                            List.of("#D8D3CD", "#B7B7A4", "#8E9AAF", "#708090"),
                            "Silver",
                            List.of("#FF0000", "#FFFF00")
                    )
            ),

            // AUTUMN

            Map.entry("True Autumn",
                    createSeason(
                            "True Autumn",
                            "true_autumn",
                            "Autumn",
                            "Warm",
                            "Balanced",
                            "Rich, earthy, and golden. Nature-inspired colors complement your warmth.",
                            List.of("#8B4513", "#B87333", "#6B8E23", "#DAA520", "#CD853F", "#A0522D", "#556B2F"),
                            List.of("#CD853F", "#A0522D", "#8B4513", "#556B2F"),
                            "Gold",
                            List.of("#FFFFFF", "#00BFFF")
                    )
            ),

            Map.entry("Dark Autumn",
                    createSeason(
                            "Dark Autumn",
                            "dark_autumn",
                            "Autumn",
                            "Warm",
                            "Deep",
                            "Sophisticated and dramatic. Deep earthy shades create beautiful harmony.",
                            List.of("#4A2C2A", "#5C4033", "#355E3B", "#8B4000", "#6B4226", "#7A5C58", "#B8860B"),
                            List.of("#4A2C2A", "#5C4033", "#6B4226", "#355E3B"),
                            "Gold",
                            List.of("#FFFFFF", "#87CEFA")
                    )
            ),

            Map.entry("Soft Autumn",
                    createSeason(
                            "Soft Autumn",
                            "soft_autumn",
                            "Autumn",
                            "Warm",
                            "Soft",
                            "Warm, muted, and approachable. Gentle earthy colors are your strongest palette.",
                            List.of("#A67C52", "#B08D57", "#8C6A43", "#A3B18A", "#C2B280", "#7F8C69", "#D6C6B8"),
                            List.of("#D6C6B8", "#C2B280", "#8C6A43", "#7F8C69"),
                            "Gold",
                            List.of("#FFFFFF", "#000000")
                    )
            )
    );

    private static SeasonDetails createSeason(
            String season,
            String seasonCode,
            String seasonFamily,
            String temperature,
            String value,
            String description,
            List<String> bestColors,
            List<String> bestNeutrals,
            String metals,
            List<String> avoidColors
    ) {
        SeasonDetails details = new SeasonDetails();

        details.season = season;
        details.seasonCode = seasonCode;
        details.seasonFamily = seasonFamily;
        details.temperature = temperature;
        details.value = value;
        details.description = description;
        details.bestColors = bestColors;
        details.bestNeutrals = bestNeutrals;
        details.metals = metals;
        details.avoidColors = avoidColors;

        return details;
    }
}
