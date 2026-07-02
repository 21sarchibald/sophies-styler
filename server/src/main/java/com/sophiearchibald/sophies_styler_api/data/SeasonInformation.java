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
                            List.of("#000000", "#0057B8", "#C8102E", "#008272", "#7F00FF", "#B0B7C6", "#00A6D6"),
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
                            List.of("#000000", "#00AEEF", "#FF0055", "#00C853", "#6A0DAD", "#E0F7FF", "#00E5FF"),
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
                            List.of("#000000", "#4B0082", "#8B0000", "#003366", "#006D77", "#5F5F5F", "#7F00FF"),
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
                            List.of("#FFD447", "#FF8C42", "#FF6F91", "#4CAF50", "#00C4B3", "#3FA9F5", "#A8E063"),
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
                            List.of("#FFF44F", "#FF5E5B", "#FF1493", "#00C853", "#00BCD4", "#2979FF", "#FF8A00"),
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
                            List.of("#F8D878", "#FFDAB9", "#F7A8A8", "#A8E6A1", "#6FD3C8", "#7DB9E8", "#FFB347"),
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
                            List.of("#BFD7EA", "#C8A2C8", "#6E8CA0", "#7BAA8B", "#D4AFB9", "#A8A8A8", "#8FA7C9"),
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
                            List.of("#EFCFD8", "#D8CFE8", "#AFCBE3", "#B7D7C0", "#D9D9D6", "#C9B6E4", "#A7C7E7"),
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
                            List.of("#A7B8A5", "#9AA7C7", "#C3A8BA", "#6D8B8B", "#8E8E8E", "#D7CFC7", "#A9B7C9"),
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
                            List.of("#A65E2E", "#B8860B", "#556B2F", "#0F766E", "#C96A3D", "#B7410E", "#8C5A2B"),
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
                            List.of("#5C2E1F", "#7A3E00", "#556B2F", "#2F4F4F", "#8B0000", "#8C6239", "#4B2142"),
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
                            List.of("#D8C3A5",
                                    "#B79B74",
                                    "#8A9275",
                                    "#6E7F6A",
                                    "#7C8B85",
                                    "#C48A6A",
                                    "#B67D6D"),
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
