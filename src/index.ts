import * as core from "@actions/core";
import * as setup from "@extractions/setup-crate";

async function main() {
  try {
    const versionSpec = core.getInput("powerpack-version");
    const tool = await setup.checkOrInstallTool({
      owner: "rossmacarthur",
      name: "powerpack",
      versionSpec,
    });
    core.addPath(tool.dir);
    core.info(`Successfully setup ${tool.name} v${tool.version}`);
  } catch (err) {
    core.setFailed(err.message);
  }
}

main();
