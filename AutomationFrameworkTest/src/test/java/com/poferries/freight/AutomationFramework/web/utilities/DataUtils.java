package com.poferries.freight.AutomationFramework.web.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigDecimal;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class DataUtils {

	/**
	 * [Return cell data from a given file, column name and row number]
	 *
	 * @param [DataFile  - Full path and name of the excel file to read]
	 * @param [SheetName - Worksheet name to retrieve the value from]
	 * @param [RowNumber - Row to get the value from]
	 * @param [ColumName - Column name to get the value from]
	 * @return 
	 * @exception [Does not search through all worksheets]
	 * @see []
	 **/

		
	public static String getdataFromExcel(String sheetName, int rowNum, int column) {

		// Assuming your Excel file is named "TestData.xlsx" and the sheet is named
		// "Sheet1"
		String filePath = "D:\\Frameworks\\Shrikant sir frameowkr\\With excel integration\\AutomationFramework\\testData\\data.xlsx";
		// String sheetName = "Sheet1";

		try (FileInputStream fileInputStream = new FileInputStream(filePath);
				Workbook workbook = new XSSFWorkbook(fileInputStream)) {

			// Assuming the name is in the first column (column index 0) of the first row
			// (row index 0)
			Sheet sheet = workbook.getSheet(sheetName);
			Row row = sheet.getRow(rowNum);
			Cell cell = row.getCell(column);
			
			
		//	String name = cell.getStringCellValue();

			// SeleniumDriver.getDriver().switchTo().frame(loginPageLocators.frameElement);
			// System.out.println("******stop*****");
			Thread.sleep(5000);

			//loginPageLocators.ENterNemeNewDashboardlink.sendKeys(name);

			// String text = loginPageLocators.ENterNemeNewDashboardlink.getText();
			// System.out.println("text is: " + text);

			Thread.sleep(5000);

		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
		return null;
	

	}

	public static String getCellData(String sheetName, int rowNum, String columnn) {

		String retCellValue = null;
		Row firstRow = null;
		Row dataRow = null;
		Cell dataCell = null;
		Cell firstCell = null;
		boolean columnFound = false;

		try {
			HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(new File(sheetName)));
			HSSFSheet sheet = workbook.getSheet(sheetName);
			// Get current row object.
			firstRow = sheet.getRow(0);
			// Loop in the row cells.
			for (int i = firstRow.getFirstCellNum(); i < firstRow.getLastCellNum(); i++) {
				// Get current cell.
				firstCell = firstRow.getCell(i);
				if (firstCell != null) {
					if (firstCell.getStringCellValue().equalsIgnoreCase(columnn)) { // if columns found

						columnFound = true;
						dataRow = sheet.getRow(rowNum);
						dataCell = dataRow.getCell(i);

						CellType cellType = dataCell.getCellType();
						if (cellType.name().equalsIgnoreCase("numeric")) {
							double numberValue = dataCell.getNumericCellValue();
							retCellValue = BigDecimal.valueOf(numberValue).toPlainString();
						} else if (cellType.name().equalsIgnoreCase("string")) {
							retCellValue = dataCell.getStringCellValue();
						} else if (cellType.name().equalsIgnoreCase("boolean")) {
							boolean numberValue = dataCell.getBooleanCellValue();
							retCellValue = String.valueOf(numberValue);
						} else {
							System.out.println(cellType.name());
						}
					}

				}
				// If the row has been found then exit the for loop
				if (columnFound) {
					break;
				}
			}
			// Close excel work book object.
			workbook.close();
		} catch (Exception ex) {
			System.err.println(ex.getMessage());
		}
		return retCellValue;
	}

	/**
	 * [Set cell data from a given file, column name and row number]
	 *
	 * @param [DataFile  - Full path and name of the excel file to read]
	 * @param [SheetName - Worksheet name to retrieve the value from]
	 * @param [RowNumber - Row to get the value from]
	 * @param [ColumName - Column name to get the value from]
	 * @param [Cell      Data]
	 * @exception [Does not search through all worksheets]
	 * @see []
	 **/
	
	// get from chatGPT
	public static String getCellValueGPT(String sheetName, int rowNum, int colNum) {
        try {
    		String filePath = "D:\\Frameworks\\Shrikant sir frameowkr\\With excel integration\\AutomationFramework\\testData\\data.xlsx";
            FileInputStream fis = new FileInputStream(filePath);
            Workbook workbook = new XSSFWorkbook(fis);
            Sheet sheet = workbook.getSheet(sheetName);

            Row row = sheet.getRow(rowNum); // Adjust row index (0-based) to 1-based
            Cell cell = row.getCell(colNum); // Adjust column index (0-based) to 1-based

            String cellValue = "";

            if (cell != null) {
                switch (cell.getCellType()) {
                    case STRING:
                        cellValue = cell.getStringCellValue();
                        break;
                    case NUMERIC:
                        cellValue = String.valueOf(cell.getNumericCellValue());
                        break;
                    case BOOLEAN:
                        cellValue = String.valueOf(cell.getBooleanCellValue());
                        break;
                    default:
                        // Handle other cell types if needed
                }
            }

            fis.close();
            workbook.close();

            return cellValue;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
	public static void setCellData(String dataFile, String sheetName, int rowNum, String colName, String cellValue) {

		Cell firstCell = null;
		Cell dataCell = null;
		boolean columnFound = false;

		try {
			HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(new File(dataFile)));
			HSSFSheet sheet = workbook.getSheet(sheetName);
			// Get current row object.
			Row row = sheet.getRow(0);
			// Loop in the row cells.
			for (int i = row.getFirstCellNum(); i < row.getLastCellNum(); i++) {

				// Get current cell.
				firstCell = row.getCell(i);
				if (firstCell.getStringCellValue().equalsIgnoreCase(colName)) {
					columnFound = true;
					dataCell = sheet.getRow(rowNum).createCell(i);
					dataCell.setCellValue(cellValue);
				}

				// if the column has been found then exit the for loop
				if (columnFound) {
					break;
				}
			}

			FileOutputStream outFile = new FileOutputStream(new File(dataFile));
			workbook.write(outFile);
			outFile.close();
			workbook.close();

		} catch (Exception ex) {
			System.err.println(ex.getMessage());
		}
	}

}
