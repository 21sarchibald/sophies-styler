package com.sophiearchibald.sophies_styler_api.data;

import java.util.Map;

public class SeasonProfiles {

    public static final Map<String, Map<String, Double>> profiles = Map.ofEntries(

        // ❄️ WINTER
        Map.entry("True Winter", Map.of(
            "cool", 1.0,
            "bright", 0.8,
            "highContrast", 1.0,
            "dark", 0.7
        )),

        Map.entry("Bright Winter", Map.of(
            "cool", 1.0,
            "bright", 1.0,
            "highContrast", 0.9,
            "dark", 0.5
        )),

        Map.entry("Dark Winter", Map.of(
            "cool", 0.8,
            "dark", 1.0,
            "highContrast", 1.0,
            "bright", 0.5
        )),

        // 🌸 SPRING
        Map.entry( "True Spring", Map.of(
            "warm", 1.0,
            "bright", 0.8,
            "light", 0.5
        )),

        Map.entry("Bright Spring", Map.of(
            "warm", 0.8,
            "bright", 1.0,
            "highContrast", 0.7,
            "light", 0.3
        )),

        Map.entry("Light Spring", Map.of(
            "warm", 0.7,
            "light", 1.0,
            "bright", 0.5
        )),

        // ☀️ SUMMER
        Map.entry("True Summer", Map.of(
            "cool", 1.0,
            "muted", 0.8,
            "lowContrast", 0.7,
            "light", 0.4
        )),

        Map.entry("Light Summer", Map.of(
            "cool", 0.8,
            "light", 1.0,
            "muted", 0.6,
            "lowContrast", 0.5
        )),

        Map.entry("Soft Summer", Map.of(
            "cool", 0.7,
            "muted", 1.0,
            "lowContrast", 1.0,
            "light", 0.3
        )),

        // 🍂 AUTUMN
        Map.entry("True Autumn", Map.of(
            "warm", 1.0,
            "muted", 0.7,
            "dark", 0.5
        )),

        Map.entry("Dark Autumn", Map.of(
            "warm", 0.7,
            "dark", 1.0,
            "muted", 0.5,
            "highContrast", 0.3
        )),

        Map.entry("Soft Autumn", Map.of(
            "warm", 0.8,
            "muted", 1.0,
            "lowContrast", 0.8,
            "dark", 0.3
        ))
    );
}