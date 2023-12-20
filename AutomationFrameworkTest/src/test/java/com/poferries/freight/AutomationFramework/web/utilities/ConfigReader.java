package com.poferries.freight.AutomationFramework.web.utilities;

import java.io.FileInputStream;
import java.util.Properties;

//The below class reads the config properties,validation messages from properties files
public class ConfigReader {

	public static final String CONFIG_WEB = "src/test/resources/config/web/config.properties";
	public static final String MESSAGE_WEB = "src/test/resources/config/web/pages.properties";
	public static final String CONFIG_MOBILE = "src/test/resources/config/mobile/config.properties";
	public static final String MESSAGE_MOBILE = "src/test/resources/config/mobile/pages.properties";

	public Properties configWeb = null;
	public Properties pagesWeb = null;
	public Properties configMobile = null;
	public Properties pagesMobile = null;

	public ConfigReader() {

		configWeb = new Properties();
		pagesWeb = new Properties();
		configMobile = new Properties();
		pagesMobile = new Properties();

		try {
			FileInputStream fs = new FileInputStream(CONFIG_WEB);
			configWeb.load(fs);

			FileInputStream fso = new FileInputStream(MESSAGE_WEB);
			pagesWeb.load(fso);

			FileInputStream fsm = new FileInputStream(CONFIG_MOBILE);
			configMobile.load(fsm);

			FileInputStream fim = new FileInputStream(MESSAGE_MOBILE);
			configMobile.load(fim);

		} catch (Exception e) {
			e.getMessage();
		}
	}

}
