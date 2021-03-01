import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async (req, res) => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SHEET_ID)
    doc.useApiKey(process.env.GOOGLE_SHEETS_API_KEY)

    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    await sheet.loadCells('M3:N4')

    return res.json({
        tom: {
            milesRan: sheet.getCellByA1('M3').value,
            milesLeft: sheet.getCellByA1('N3').value
        },
        ross: {
            milesRan: sheet.getCellByA1('M4').value,
            milesLeft: sheet.getCellByA1('N4').value
        }
    })
}