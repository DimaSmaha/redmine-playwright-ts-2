import { test, expect } from "@playwright/test";
import { MedicalVideosPage } from "../pages/MedicalVideos.page";
import { Header } from "../pages/Header.page";

test.describe("medical videos page testing", () => {
  test.beforeEach(async ({ page }) => {
    let medicalVideosPage = new MedicalVideosPage(page);
    //test.setTimeout(1000000);
    await medicalVideosPage.visit();
    await page.waitForLoadState();
  });

  test("ALT-02 Verify the medical videos page", async ({ page }) => {
    let header = new Header(page);
    let medicalVideosPage = new MedicalVideosPage(page);
    //test.setTimeout(100000);
    await header.visit();
    await page.waitForLoadState();
    await expect(header.discoverMedicalDrop).toBeVisible();
    await expect(header.medicalVideosLink).not.toBeVisible();
    await header.discoverMedicalDrop.click();
    await expect(header.medicalVideosLink).toBeVisible();
    await header.medicalVideosLink.click();
    await expect(medicalVideosPage.heartVideo).toBeVisible();
  });
});
