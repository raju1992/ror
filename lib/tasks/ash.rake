

task :extract => :environment do

  require 'nokogiri'
  require 'open-uri'
  require 'geocoder'

  doc=Nokogiri::HTML(open("https://mlh.io/seasons/f2015/events"))

  got=doc.css("div.inner")
  got.each do |t|
    name=t.css("h3").text
    date=t.css("p").first.text
    location=t.css("p").last.text

    s=Geocoder.search(location);
    lat=s[0].latitude
    lon=s[0].longitude
    puts lat
    #puts lon

    eventcreate=Eventinfo.create(name:name,datesofevent:date,location:location,latitude:lat,longitude:lon);


  end
end


task :coordinates => :environment do
  require 'geocoder'

  s=Geocoder.search("newyork");
  puts s[0].latitude,s[0].longitude
end
