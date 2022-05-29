package com.S3V.Event.Check.In.Tracker.helper;

import com.S3V.Event.Check.In.Tracker.model.Student;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;

import java.lang.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class CSVHelper {
    public static String TYPE = "text/csv";
    static String[] HEADERS = { "Id", "Title", "Description", "Published" };
    public static boolean hasCSVFormat(MultipartFile file) {
        if (!TYPE.equals(file.getContentType())) {
            return false;
        }
        return true;
    }
    public static List<Student> csvToStudents(InputStream is) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withHeader(HEADERS).withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {
            List<Student> students = new ArrayList<>();
            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            for (CSVRecord csvRecord : csvRecords) {
                Long id = 1L;
                Student tutorial = new Student(
                        id,
                        Integer.parseInt(csvRecord.get("countyId")),
                        Integer.parseInt(csvRecord.get("guestTicket")),
                        csvRecord.get("firstName"),
                        csvRecord.get("lastName"),
                        csvRecord.get("middleInitial"),
                        Integer.parseInt(csvRecord.get("ticket")),
                        Integer.parseInt(csvRecord.get("grade")),
                        csvRecord.get("paymentMethod"),
                        csvRecord.get("guest")
                );
                students.add(tutorial);
                id++;
            }
            return students;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}
