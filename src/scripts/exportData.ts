import * as fs from "fs";
import * as path from "path";
import { archetypes, SavableArchetype } from "../data/archetypes";
import { forms } from "../data/forms";
import { freestyles } from "../data/freestyles";
import { Form } from "../data/types/Form";
import { Style } from "../data/types/Style";

const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

function exportData(folder: string, data: Array<SavableArchetype | Style | Form>) {
    if (!fs.existsSync(path.join(outputDir, folder))) {
        fs.mkdirSync(path.join(outputDir, folder));
    }
    data.forEach((dat) => {
        const fileName = dat.name!.toLowerCase();
        const filePath = path.join(outputDir, folder, `${fileName}.json`);
        fs.writeFileSync(filePath, JSON.stringify(dat, null, 4));
        console.log(`Saved ${fileName} to ${filePath}`);
    });
}

exportData(
    "archetypes",
    archetypes.map((a) => {
        const newArchetype: SavableArchetype = {
            name: a.name,
            focusedAbilities: a.focusedAbilities,
            fusedAbilities: a.fusedAbilities,
            franticAbilities: a.franticAbilities,
            actions: a.actions,
            styles: a.styles.map((s) => s.name.toLowerCase()),
            alphaSuper: a.alphaSuper,
            deltaSuper: a.deltaSuper,
        };
        return newArchetype;
    })
);
if (!fs.existsSync(path.join(outputDir, "styles"))) {
    fs.mkdirSync(path.join(outputDir, "styles"));
}
archetypes.forEach((a) => {
    exportData(path.join("styles", a.name.toLowerCase()), a.styles);
});
exportData(path.join("styles", "free"), freestyles);
exportData("forms", forms);
