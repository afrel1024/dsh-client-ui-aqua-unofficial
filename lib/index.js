// aqua/src/index.ts
import z from "@deepseek-ai/schemastery";
var AQUA_SETTINGS_NAMESPACE = "aqua";
var AquaSettingsSchema = z.object({ enabled: z.boolean().default(true) });
function apply() {
}
export {
  AQUA_SETTINGS_NAMESPACE,
  AquaSettingsSchema,
  apply
};
