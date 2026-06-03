
package com.sophiearchibald.sophies_styler_api.dto;

import lombok.Data;

@Data
public class ColorSubmission {

    public double warm;
    public double cool;

    public double bright;
    public double muted;

    public double light;
    public double dark;

    public double highContrast;
    public double lowContrast;

}